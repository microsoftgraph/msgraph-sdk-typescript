/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { EmployeeExperienceRequestBuilderNavigationMetadata, EmployeeExperienceRequestBuilderRequestsMetadata, type EmployeeExperienceRequestBuilder } from './employeeExperience/index.js';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface EmployeeExperienceServiceClient extends BaseRequestBuilder<EmployeeExperienceServiceClient> {
    /**
     * Provides operations to manage the employeeExperience singleton.
     */
    get employeeExperience(): EmployeeExperienceRequestBuilder;
}
/**
 * Instantiates a new EmployeeExperienceServiceClient and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createEmployeeExperienceServiceClient(requestAdapter: RequestAdapter) {
    registerDefaultSerializer(JsonSerializationWriterFactory);
    registerDefaultSerializer(TextSerializationWriterFactory);
    registerDefaultSerializer(FormSerializationWriterFactory);
    registerDefaultSerializer(MultipartSerializationWriterFactory);
    registerDefaultDeserializer(JsonParseNodeFactory);
    registerDefaultDeserializer(TextParseNodeFactory);
    registerDefaultDeserializer(FormParseNodeFactory);
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<EmployeeExperienceServiceClient>(requestAdapter, pathParameters, EmployeeExperienceServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const EmployeeExperienceServiceClientNavigationMetadata: Record<Exclude<keyof EmployeeExperienceServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    employeeExperience: {
        requestsMetadata: EmployeeExperienceRequestBuilderRequestsMetadata,
        navigationMetadata: EmployeeExperienceRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const EmployeeExperienceServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
