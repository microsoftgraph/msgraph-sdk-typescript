import { type EducationSchool } from '../../../models/educationSchool';
import { serializeBaseDeltaFunctionResponse } from '../../../models/serializeBaseDeltaFunctionResponse';
import { serializeEducationSchool } from '../../../models/serializeEducationSchool';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<EducationSchool>("value", deltaResponse.value, serializeEducationSchool);
}
