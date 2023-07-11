import {Identity} from './identity';
import {TeamworkApplicationIdentityType} from './teamworkApplicationIdentityType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkApplicationIdentity extends Identity, Parsable {
    /**
     * Type of application that is referenced. Possible values are: aadApplication, bot, tenantBot, office365Connector, outgoingWebhook, and unknownFutureValue.
     */
    applicationIdentityType?: TeamworkApplicationIdentityType | undefined;
}
