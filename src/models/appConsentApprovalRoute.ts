import {AppConsentRequest} from './appConsentRequest';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppConsentApprovalRoute extends Entity, Parsable {
    /**
     * A collection of appConsentRequest objects representing apps for which admin consent has been requested by one or more users.
     */
    appConsentRequests?: AppConsentRequest[] | undefined;
}
