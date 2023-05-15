import {IncomingCallOptions} from '../../../../models/incomingCallOptions';
import {MediaConfig} from '../../../../models/mediaConfig';
import {Modality} from '../../../../models/modality';
import {serializeIncomingCallOptions} from '../../../../models/serializeIncomingCallOptions';
import {serializeMediaConfig} from '../../../../models/serializeMediaConfig';
import {AnswerPostRequestBody} from './answerPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAnswerPostRequestBody(writer: SerializationWriter, answerPostRequestBody: AnswerPostRequestBody | undefined = {} as AnswerPostRequestBody) : void {
        if(answerPostRequestBody.acceptedModalities)
        writer.writeEnumValue<Modality>("acceptedModalities", ...answerPostRequestBody.acceptedModalities);
        writer.writeStringValue("callbackUri", answerPostRequestBody.callbackUri);
        writer.writeObjectValue<IncomingCallOptions>("callOptions", answerPostRequestBody.callOptions, serializeIncomingCallOptions);
        writer.writeObjectValue<MediaConfig>("mediaConfig", answerPostRequestBody.mediaConfig, serializeMediaConfig);
        writer.writeNumberValue("participantCapacity", answerPostRequestBody.participantCapacity);
        writer.writeAdditionalData(answerPostRequestBody.additionalData);
}
