import {OnenotePatchContentCommand} from '../../../../../../../../../../../models/';
import {createOnenotePatchContentCommandFromDiscriminatorValue} from '../../../../../../../../../../../models/createOnenotePatchContentCommandFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the onenotePatchContent method.  */
export class OnenotePatchContentRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The commands property  */
    private _commands?: OnenotePatchContentCommand[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the commands property value. The commands property
     * @returns a onenotePatchContentCommand
     */
    public get commands() {
        return this._commands;
    };
    /**
     * Sets the commands property value. The commands property
     * @param value Value to set for the commands property.
     */
    public set commands(value: OnenotePatchContentCommand[] | undefined) {
        this._commands = value;
    };
    /**
     * Instantiates a new onenotePatchContentRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "commands": n => { this.commands = n.getCollectionOfObjectValues<OnenotePatchContentCommand>(createOnenotePatchContentCommandFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<OnenotePatchContentCommand>("commands", this.commands);
        writer.writeAdditionalData(this.additionalData);
    };
}
