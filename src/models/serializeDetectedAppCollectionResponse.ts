import {DetectedApp} from './detectedApp';
import {DetectedAppCollectionResponse} from './detectedAppCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDetectedApp} from './serializeDetectedApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDetectedAppCollectionResponse(detectedAppCollectionResponse: DetectedAppCollectionResponse | undefined = {} as DetectedAppCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, detectedAppCollectionResponse)
        writer.writeCollectionOfObjectValues<DetectedApp>("value", detectedAppCollectionResponse.value, serializeDetectedApp);
}
