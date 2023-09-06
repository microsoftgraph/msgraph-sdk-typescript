import { type PrintCertificateSigningRequest } from '../../../models/printCertificateSigningRequest';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface CreatePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The certificateSigningRequest property
     */
    certificateSigningRequest?: PrintCertificateSigningRequest | undefined;
    /**
     * The connectorId property
     */
    connectorId?: string | undefined;
    /**
     * The displayName property
     */
    displayName?: string | undefined;
    /**
     * The hasPhysicalDevice property
     */
    hasPhysicalDevice?: boolean | undefined;
    /**
     * The manufacturer property
     */
    manufacturer?: string | undefined;
    /**
     * The model property
     */
    model?: string | undefined;
    /**
     * The physicalDeviceId property
     */
    physicalDeviceId?: string | undefined;
}
