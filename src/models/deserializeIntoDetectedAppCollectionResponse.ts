import {createDetectedAppFromDiscriminatorValue} from './createDetectedAppFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DetectedApp} from './detectedApp';
import {DetectedAppCollectionResponse} from './detectedAppCollectionResponse';
import {serializeDetectedApp} from './serializeDetectedApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDetectedAppCollectionResponse(detectedAppCollectionResponse: DetectedAppCollectionResponse | undefined = {} as DetectedAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(detectedAppCollectionResponse),
        "value": n => { detectedAppCollectionResponse.value = n.getCollectionOfObjectValues<DetectedApp>(createDetectedAppFromDiscriminatorValue); },
    }
}
