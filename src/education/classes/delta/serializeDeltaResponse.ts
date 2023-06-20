import {EducationClass} from '../../../models/educationClass';
import {serializeBaseDeltaFunctionResponse} from '../../../models/serializeBaseDeltaFunctionResponse';
import {serializeEducationClass} from '../../../models/serializeEducationClass';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse, writer: SerializationWriter) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<EducationClass>("value", deltaResponse.value, serializeEducationClass);
}
