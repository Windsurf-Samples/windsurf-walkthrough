curl -X POST --header "Content-Type: application/json" \
--data '{
 "service_key":  "9Pa2r5mKMaSESDC67dLFZmExY2c=",
  "query_requests": [
    {
      "data_source": "QUERY_DATA_SOURCE_COMMAND_DATA",
     "selections": [
        {
          "field": "lines_added",
          "name": "lines_added",
          "aggregation_function": "QUERY_AGGREGATION_SUM"
        },
        {
          "field": "lines_removed",
          "name": "lines_removed",
          "aggregation_function": "QUERY_AGGREGATION_SUM"
        }
      ],
      "filters": [
        {
          "name": "provider_source",
          "filter": "QUERY_FILTER_EQUAL",
          "value": "PROVIDER_SOURCE_COMMAND_EDIT"
        },
        {
          "name": "accepted",
          "filter": "QUERY_FILTER_EQUAL",
          "value": "true"
        }
      ],
      "aggregations": [
        {
          "field": "language",
          "name": "language"
        }
      ]
    }
  ]
}' \
https://server.codeium.com/api/v1/Analytics