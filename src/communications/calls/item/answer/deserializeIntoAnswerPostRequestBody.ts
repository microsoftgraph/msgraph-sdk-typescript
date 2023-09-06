import { createIncomingCallOptionsFromDiscriminatorValue } from '../../../../models/createIncomingCallOptionsFromDiscriminatorValue';
import { createMediaConfigFromDiscriminatorValue } from '../../../../models/createMediaConfigFromDiscriminatorValue';
import { type IncomingCallOptions } from '../../../../models/incomingCallOptions';
import { type MediaConfig } from '../../../../models/mediaConfig';
import { Modality } from '../../../../models/modality';
import { serializeIncomingCallOptions } from '../../../../models/serializeIncomingCallOptions';
import { serializeMediaConfig } from '../../../../models/serializeMediaConfig';
import { type AnswerPostRequestBody } from './answerPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAnswerPostRequestBody(answerPostRequestBody: AnswerPostRequestBody | undefined = {} as AnswerPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "acceptedModalities": n => { answerPostRequestBody.acceptedModalities = n.getCollectionOfEnumValues<Modality>(Modality); },
        "callbackUri": n => { answerPostRequestBody.callbackUri = n.getStringValue(); },
        "callOptions": n => { answerPostRequestBody.callOptions = n.getObjectValue<IncomingCallOptions>(createIncomingCallOptionsFromDiscriminatorValue); },
        "mediaConfig": n => { answerPostRequestBody.mediaConfig = n.getObjectValue<MediaConfig>(createMediaConfigFromDiscriminatorValue); },
        "participantCapacity": n => { answerPostRequestBody.participantCapacity = n.getNumberValue(); },
    }
}
