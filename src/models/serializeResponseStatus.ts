import {ResponseStatus} from './responseStatus';
import {ResponseType} from './responseType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResponseStatus(writer: SerializationWriter, responseStatus: ResponseStatus | undefined = {} as ResponseStatus) : void {
        writer.writeStringValue("@odata.type", responseStatus.odataType);
        writer.writeEnumValue<ResponseType>("response", responseStatus.response);
        writer.writeDateValue("time", responseStatus.time);
        writer.writeAdditionalData(responseStatus.additionalData);
}
