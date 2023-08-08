import {createPrintDocumentUploadPropertiesFromDiscriminatorValue} from '../../../../../../../../models/createPrintDocumentUploadPropertiesFromDiscriminatorValue';
import type {PrintDocumentUploadProperties} from '../../../../../../../../models/printDocumentUploadProperties';
import {serializePrintDocumentUploadProperties} from '../../../../../../../../models/serializePrintDocumentUploadProperties';
import type {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "properties": n => { createUploadSessionPostRequestBody.properties = n.getObjectValue<PrintDocumentUploadProperties>(createPrintDocumentUploadPropertiesFromDiscriminatorValue); },
    }
}
