import {OnenotePatchContentCommandImpl} from '../../../../../../models/';
import {createOnenotePatchContentCommandFromDiscriminatorValue} from '../../../../../../models/createOnenotePatchContentCommandFromDiscriminatorValue';
import {OnenotePatchContentCommand} from '../../../../../../models/onenotePatchContentCommand';
import {OnenotePatchContentPostRequestBody} from './onenotePatchContentPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the onenotePatchContent method. */
export class OnenotePatchContentPostRequestBodyImpl implements AdditionalDataHolder, OnenotePatchContentPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The commands property */
    public commands?: OnenotePatchContentCommand[] | undefined;
    /**
     * Instantiates a new onenotePatchContentPostRequestBody and sets the default values.
     * @param onenotePatchContentPostRequestBodyParameterValue 
     */
    public constructor(onenotePatchContentPostRequestBodyParameterValue?: OnenotePatchContentPostRequestBody | undefined) {
        this.additionalData = onenotePatchContentPostRequestBodyParameterValue?.additionalData ? onenotePatchContentPostRequestBodyParameterValue?.additionalData! : {}
        this.commands = onenotePatchContentPostRequestBodyParameterValue?.commands ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "commands": n => { this.commands = n.getCollectionOfObjectValues<OnenotePatchContentCommandImpl>(createOnenotePatchContentCommandFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.commands && this.commands.length != 0){        const commandsArrValue: OnenotePatchContentCommandImpl[] = []; this.commands?.forEach(element => {commandsArrValue.push(new OnenotePatchContentCommandImpl(element));});
        writer.writeCollectionOfObjectValues<OnenotePatchContentCommandImpl>("commands", commandsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
