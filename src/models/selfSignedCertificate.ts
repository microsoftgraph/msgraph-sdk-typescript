import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface SelfSignedCertificate extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The customKeyIdentifier property
     */
    customKeyIdentifier?: string | undefined;
    /**
     * The displayName property
     */
    displayName?: string | undefined;
    /**
     * The endDateTime property
     */
    endDateTime?: Date | undefined;
    /**
     * The key property
     */
    key?: string | undefined;
    /**
     * The keyId property
     */
    keyId?: Guid | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The startDateTime property
     */
    startDateTime?: Date | undefined;
    /**
     * The thumbprint property
     */
    thumbprint?: string | undefined;
    /**
     * The type property
     */
    type?: string | undefined;
    /**
     * The usage property
     */
    usage?: string | undefined;
}
