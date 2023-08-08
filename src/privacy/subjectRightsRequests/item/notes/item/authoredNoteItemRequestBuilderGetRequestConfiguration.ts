import {AuthoredNoteItemRequestBuilderGetQueryParameters} from './authoredNoteItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthoredNoteItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthoredNoteItemRequestBuilderGetQueryParameters | undefined;
}
