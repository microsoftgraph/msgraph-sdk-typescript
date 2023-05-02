import {EducationAssignment} from '../../../../models/educationAssignment';
import {serializeBaseDeltaFunctionResponse} from '../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeEducationAssignment} from '../../../../models/serializeEducationAssignment';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<EducationAssignment>("value", deltaResponse.value, serializeEducationAssignment);
}
