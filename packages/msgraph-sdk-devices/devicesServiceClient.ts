/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { DevicesRequestBuilderNavigationMetadata, DevicesRequestBuilderRequestsMetadata, type DevicesRequestBuilder } from './devices/index.js';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface DevicesServiceClient extends BaseRequestBuilder<DevicesServiceClient> {
    /**
     * Provides operations to manage the collection of device entities.
     */
    get devices(): DevicesRequestBuilder;
}
/**
 * Instantiates a new DevicesServiceClient and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createDevicesServiceClient(requestAdapter: RequestAdapter) {
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
    return apiClientProxifier<DevicesServiceClient>(requestAdapter, pathParameters, DevicesServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DevicesServiceClientNavigationMetadata: Record<Exclude<keyof DevicesServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    devices: {
        requestsMetadata: DevicesRequestBuilderRequestsMetadata,
        navigationMetadata: DevicesRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const DevicesServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
