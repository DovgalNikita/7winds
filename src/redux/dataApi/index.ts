import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.BASE_URL;

export const dataApi = createApi({
    reducerPath:"dataApi",
    tagTypes: ["dataItems"],
    baseQuery: fetchBaseQuery({baseUrl:BASE_URL}),
    endpoints: (build)=>({
        getData: build.query<IGetData[], void>({
            query: () =>"row/list",
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: "dataItems" as const, id })), "dataItems"]
                    : ["dataItems"],
        }),
        addItem: build.mutation({
            query:(body) => ({
                url:"row/create",
                method:"POST",
                body
            }),
            invalidatesTags: [{type:"dataItems",id:"LIST"}]
        })
    })
});

export const {useGetDataQuery} = dataApi;