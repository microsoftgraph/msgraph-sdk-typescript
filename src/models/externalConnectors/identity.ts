import {Entity} from '../entity';
import {IdentityType} from './identityType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Identity extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The type of identity. Possible values are: user or group for Azure AD identities and externalgroup for groups in an external system. */
    type?: IdentityType | undefined;
}
