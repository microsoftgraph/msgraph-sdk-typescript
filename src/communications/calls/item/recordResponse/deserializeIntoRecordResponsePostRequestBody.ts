import {createPromptFromDiscriminatorValue} from '../../../../models/createPromptFromDiscriminatorValue';
import type {Prompt} from '../../../../models/prompt';
import {serializePrompt} from '../../../../models/serializePrompt';
import type {RecordResponsePostRequestBody} from './recordResponsePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecordResponsePostRequestBody(recordResponsePostRequestBody: RecordResponsePostRequestBody | undefined = {} as RecordResponsePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "bargeInAllowed": n => { recordResponsePostRequestBody.bargeInAllowed = n.getBooleanValue(); },
        "clientContext": n => { recordResponsePostRequestBody.clientContext = n.getStringValue(); },
        "initialSilenceTimeoutInSeconds": n => { recordResponsePostRequestBody.initialSilenceTimeoutInSeconds = n.getNumberValue(); },
        "maxRecordDurationInSeconds": n => { recordResponsePostRequestBody.maxRecordDurationInSeconds = n.getNumberValue(); },
        "maxSilenceTimeoutInSeconds": n => { recordResponsePostRequestBody.maxSilenceTimeoutInSeconds = n.getNumberValue(); },
        "playBeep": n => { recordResponsePostRequestBody.playBeep = n.getBooleanValue(); },
        "prompts": n => { recordResponsePostRequestBody.prompts = n.getCollectionOfObjectValues<Prompt>(createPromptFromDiscriminatorValue); },
        "stopTones": n => { recordResponsePostRequestBody.stopTones = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
