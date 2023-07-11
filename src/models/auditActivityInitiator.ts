import {AppIdentity} from './appIdentity';
import {UserIdentity} from './userIdentity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuditActivityInitiator extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If the resource initiating the activity is an app, this property indicates all the app related information like appId, Name, servicePrincipalId, Name.
     */
    app?: AppIdentity | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * If the resource initiating the activity is a user, this property Indicates all the user related information like userId, Name, UserPrinicpalName.
     */
    user?: UserIdentity | undefined;
}
