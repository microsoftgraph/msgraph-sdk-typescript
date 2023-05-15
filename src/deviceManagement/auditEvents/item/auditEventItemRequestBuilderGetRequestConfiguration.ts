import {AuditEventItemRequestBuilderGetQueryParameters} from './auditEventItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuditEventItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AuditEventItemRequestBuilderGetQueryParameters | undefined;
}
