import {Identity} from './identity';
import {TeamworkApplicationIdentityType} from './teamworkApplicationIdentityType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkApplicationIdentity extends Partial<AdditionalDataHolder>, Identity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Type of application that is referenced. Possible values are: aadApplication, bot, tenantBot, office365Connector, and outgoingWebhook. */
    applicationIdentityType?: TeamworkApplicationIdentityType | undefined;
}
