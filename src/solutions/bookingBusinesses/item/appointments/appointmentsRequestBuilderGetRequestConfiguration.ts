import {AppointmentsRequestBuilderGetQueryParameters} from './appointmentsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppointmentsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AppointmentsRequestBuilderGetQueryParameters | undefined;
}
