import { type AlterationResponse } from './alterationResponse';
import { type SearchAlteration } from './searchAlteration';
import { SearchAlterationType } from './searchAlterationType';
import { serializeSearchAlteration } from './serializeSearchAlteration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAlterationResponse(writer: SerializationWriter, alterationResponse: AlterationResponse | undefined = {} as AlterationResponse) : void {
        writer.writeStringValue("@odata.type", alterationResponse.odataType);
        writer.writeStringValue("originalQueryString", alterationResponse.originalQueryString);
        writer.writeObjectValue<SearchAlteration>("queryAlteration", alterationResponse.queryAlteration, serializeSearchAlteration);
        writer.writeEnumValue<SearchAlterationType>("queryAlterationType", alterationResponse.queryAlterationType);
        writer.writeAdditionalData(alterationResponse.additionalData);
}
