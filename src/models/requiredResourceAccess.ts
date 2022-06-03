import {ResourceAccess} from './resourceAccess';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RequiredResourceAccess extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource. */
    resourceAccess?: ResourceAccess[] | undefined;
    /** The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    resourceAppId?: string | undefined;
}
