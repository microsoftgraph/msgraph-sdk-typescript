import {AccessReviewReviewerItemRequestBuilderGetQueryParameters} from './accessReviewReviewerItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AccessReviewReviewerItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AccessReviewReviewerItemRequestBuilderGetQueryParameters | undefined;
}
