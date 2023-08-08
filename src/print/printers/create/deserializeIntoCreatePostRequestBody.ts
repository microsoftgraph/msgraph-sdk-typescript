import {createPrintCertificateSigningRequestFromDiscriminatorValue} from '../../../models/createPrintCertificateSigningRequestFromDiscriminatorValue';
import type {PrintCertificateSigningRequest} from '../../../models/printCertificateSigningRequest';
import {serializePrintCertificateSigningRequest} from '../../../models/serializePrintCertificateSigningRequest';
import type {CreatePostRequestBody} from './createPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreatePostRequestBody(createPostRequestBody: CreatePostRequestBody | undefined = {} as CreatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "certificateSigningRequest": n => { createPostRequestBody.certificateSigningRequest = n.getObjectValue<PrintCertificateSigningRequest>(createPrintCertificateSigningRequestFromDiscriminatorValue); },
        "connectorId": n => { createPostRequestBody.connectorId = n.getStringValue(); },
        "displayName": n => { createPostRequestBody.displayName = n.getStringValue(); },
        "hasPhysicalDevice": n => { createPostRequestBody.hasPhysicalDevice = n.getBooleanValue(); },
        "manufacturer": n => { createPostRequestBody.manufacturer = n.getStringValue(); },
        "model": n => { createPostRequestBody.model = n.getStringValue(); },
        "physicalDeviceId": n => { createPostRequestBody.physicalDeviceId = n.getStringValue(); },
    }
}
