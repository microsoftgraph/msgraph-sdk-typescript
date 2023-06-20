import {EducationSchool} from '../../../models/educationSchool';
import {serializeBaseDeltaFunctionResponse} from '../../../models/serializeBaseDeltaFunctionResponse';
import {serializeEducationSchool} from '../../../models/serializeEducationSchool';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse, writer: SerializationWriter) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<EducationSchool>("value", deltaResponse.value, serializeEducationSchool);
}
