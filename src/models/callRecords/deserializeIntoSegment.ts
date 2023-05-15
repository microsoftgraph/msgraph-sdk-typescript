import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {createFailureInfoFromDiscriminatorValue} from './createFailureInfoFromDiscriminatorValue';
import {createMediaFromDiscriminatorValue} from './createMediaFromDiscriminatorValue';
import {Endpoint} from './endpoint';
import {FailureInfo} from './failureInfo';
import {Media} from './media';
import {Segment} from './segment';
import {serializeEndpoint} from './serializeEndpoint';
import {serializeFailureInfo} from './serializeFailureInfo';
import {serializeMedia} from './serializeMedia';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSegment(segment: Segment | undefined = {} as Segment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(segment),
        "callee": n => { segment.callee = n.getObjectValue<Endpoint>(createEndpointFromDiscriminatorValue); },
        "caller": n => { segment.caller = n.getObjectValue<Endpoint>(createEndpointFromDiscriminatorValue); },
        "endDateTime": n => { segment.endDateTime = n.getDateValue(); },
        "failureInfo": n => { segment.failureInfo = n.getObjectValue<FailureInfo>(createFailureInfoFromDiscriminatorValue); },
        "media": n => { segment.media = n.getCollectionOfObjectValues<Media>(createMediaFromDiscriminatorValue); },
        "startDateTime": n => { segment.startDateTime = n.getDateValue(); },
    }
}
