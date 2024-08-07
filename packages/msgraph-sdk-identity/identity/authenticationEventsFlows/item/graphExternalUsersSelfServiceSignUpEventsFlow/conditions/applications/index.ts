/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { IncludeApplicationsRequestBuilderNavigationMetadata, IncludeApplicationsRequestBuilderRequestsMetadata, type IncludeApplicationsRequestBuilder } from './includeApplications/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/graph.externalUsersSelfServiceSignUpEventsFlow/conditions/applications
 */
export interface ApplicationsRequestBuilder extends BaseRequestBuilder<ApplicationsRequestBuilder> {
    /**
     * Provides operations to manage the includeApplications property of the microsoft.graph.authenticationConditionsApplications entity.
     */
    get includeApplications(): IncludeApplicationsRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const ApplicationsRequestBuilderUriTemplate = "{+baseurl}/identity/authenticationEventsFlows/{authenticationEventsFlow%2Did}/graph.externalUsersSelfServiceSignUpEventsFlow/conditions/applications";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ApplicationsRequestBuilderNavigationMetadata: Record<Exclude<keyof ApplicationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    includeApplications: {
        requestsMetadata: IncludeApplicationsRequestBuilderRequestsMetadata,
        navigationMetadata: IncludeApplicationsRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
