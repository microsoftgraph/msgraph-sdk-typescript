import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {createFailureInfoFromDiscriminatorValue} from './createFailureInfoFromDiscriminatorValue';
import {createSegmentFromDiscriminatorValue} from './createSegmentFromDiscriminatorValue';
import type {Endpoint} from './endpoint';
import type {FailureInfo} from './failureInfo';
import {Modality} from './modality';
import type {Segment} from './segment';
import {serializeEndpoint} from './serializeEndpoint';
import {serializeFailureInfo} from './serializeFailureInfo';
import {serializeSegment} from './serializeSegment';
import type {Session} from './session';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSession(session: Session | undefined = {} as Session) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(session),
        "callee": n => { session.callee = n.getObjectValue<Endpoint>(createEndpointFromDiscriminatorValue); },
        "caller": n => { session.caller = n.getObjectValue<Endpoint>(createEndpointFromDiscriminatorValue); },
        "endDateTime": n => { session.endDateTime = n.getDateValue(); },
        "failureInfo": n => { session.failureInfo = n.getObjectValue<FailureInfo>(createFailureInfoFromDiscriminatorValue); },
        "isTest": n => { session.isTest = n.getBooleanValue(); },
        "modalities": n => { session.modalities = n.getCollectionOfEnumValues<Modality>(Modality); },
        "segments": n => { session.segments = n.getCollectionOfObjectValues<Segment>(createSegmentFromDiscriminatorValue); },
        "startDateTime": n => { session.startDateTime = n.getDateValue(); },
    }
}
