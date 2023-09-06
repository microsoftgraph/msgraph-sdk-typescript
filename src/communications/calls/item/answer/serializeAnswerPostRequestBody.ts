import { type IncomingCallOptions } from '../../../../models/incomingCallOptions';
import { type MediaConfig } from '../../../../models/mediaConfig';
import { Modality } from '../../../../models/modality';
import { serializeIncomingCallOptions } from '../../../../models/serializeIncomingCallOptions';
import { serializeMediaConfig } from '../../../../models/serializeMediaConfig';
import { type AnswerPostRequestBody } from './answerPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAnswerPostRequestBody(writer: SerializationWriter, answerPostRequestBody: AnswerPostRequestBody | undefined = {} as AnswerPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<Modality>("acceptedModalities", answerPostRequestBody.acceptedModalities, object);
        writer.writeStringValue("callbackUri", answerPostRequestBody.callbackUri);
        writer.writeObjectValue<IncomingCallOptions>("callOptions", answerPostRequestBody.callOptions, serializeIncomingCallOptions);
        writer.writeObjectValue<MediaConfig>("mediaConfig", answerPostRequestBody.mediaConfig, serializeMediaConfig);
        writer.writeNumberValue("participantCapacity", answerPostRequestBody.participantCapacity);
        writer.writeAdditionalData(answerPostRequestBody.additionalData);
}
