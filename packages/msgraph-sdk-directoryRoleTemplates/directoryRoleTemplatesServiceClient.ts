/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { DirectoryRoleTemplatesRequestBuilderNavigationMetadata, DirectoryRoleTemplatesRequestBuilderRequestsMetadata, type DirectoryRoleTemplatesRequestBuilder } from './directoryRoleTemplates/index.js';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface DirectoryRoleTemplatesServiceClient extends BaseRequestBuilder<DirectoryRoleTemplatesServiceClient> {
    /**
     * Provides operations to manage the collection of directoryRoleTemplate entities.
     */
    get directoryRoleTemplates(): DirectoryRoleTemplatesRequestBuilder;
}
/**
 * Instantiates a new DirectoryRoleTemplatesServiceClient and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createDirectoryRoleTemplatesServiceClient(requestAdapter: RequestAdapter) {
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
    return apiClientProxifier<DirectoryRoleTemplatesServiceClient>(requestAdapter, pathParameters, DirectoryRoleTemplatesServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DirectoryRoleTemplatesServiceClientNavigationMetadata: Record<Exclude<keyof DirectoryRoleTemplatesServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    directoryRoleTemplates: {
        requestsMetadata: DirectoryRoleTemplatesRequestBuilderRequestsMetadata,
        navigationMetadata: DirectoryRoleTemplatesRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const DirectoryRoleTemplatesServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
