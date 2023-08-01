import type {DetectedApp} from './detectedApp';
import type {DetectedAppCollectionResponse} from './detectedAppCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDetectedApp} from './serializeDetectedApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDetectedAppCollectionResponse(writer: SerializationWriter, detectedAppCollectionResponse: DetectedAppCollectionResponse | undefined = {} as DetectedAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, detectedAppCollectionResponse)
        writer.writeCollectionOfObjectValues<DetectedApp>("value", detectedAppCollectionResponse.value, serializeDetectedApp);
}
