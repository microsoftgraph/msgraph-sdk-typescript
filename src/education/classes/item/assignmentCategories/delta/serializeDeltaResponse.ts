import {EducationCategory} from '../../../../../models/educationCategory';
import {serializeBaseDeltaFunctionResponse} from '../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeEducationCategory} from '../../../../../models/serializeEducationCategory';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse, writer: SerializationWriter) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<EducationCategory>("value", deltaResponse.value, serializeEducationCategory);
}
