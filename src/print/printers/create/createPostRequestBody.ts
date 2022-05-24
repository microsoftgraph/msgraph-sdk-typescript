import {PrintCertificateSigningRequest} from '../../../models/printCertificateSigningRequest';

export interface CreatePostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The certificateSigningRequest property */
    certificateSigningRequest?:PrintCertificateSigningRequest | undefined;
    /** The connectorId property */
    connectorId?:string | undefined;
    /** The displayName property */
    displayName?:string | undefined;
    /** The hasPhysicalDevice property */
    hasPhysicalDevice?:boolean | undefined;
    /** The manufacturer property */
    manufacturer?:string | undefined;
    /** The model property */
    model?:string | undefined;
    /** The physicalDeviceId property */
    physicalDeviceId?:string | undefined;
}
