import { type MailboxSettingsRequestBuilderGetQueryParameters } from './mailboxSettingsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface MailboxSettingsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: MailboxSettingsRequestBuilderGetQueryParameters | undefined;
}
