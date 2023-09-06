import { type OrgContact } from '../../models/orgContact';
import { serializeBaseDeltaFunctionResponse } from '../../models/serializeBaseDeltaFunctionResponse';
import { serializeOrgContact } from '../../models/serializeOrgContact';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<OrgContact>("value", deltaResponse.value, serializeOrgContact);
}
