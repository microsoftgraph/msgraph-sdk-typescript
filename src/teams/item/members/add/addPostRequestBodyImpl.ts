import {ConversationMemberImpl} from '../../../../models/';
import {ConversationMember} from '../../../../models/conversationMember';
import {createConversationMemberFromDiscriminatorValue} from '../../../../models/createConversationMemberFromDiscriminatorValue';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the add method. */
export class AddPostRequestBodyImpl implements AddPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The values property */
    private _values?: ConversationMember[] | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new addPostRequestBody and sets the default values.
     * @param addPostRequestBodyParameterValue 
     */
    public constructor(addPostRequestBodyParameterValue?: AddPostRequestBody | undefined) {
        this._additionalData = addPostRequestBodyParameterValue?.additionalData ? addPostRequestBodyParameterValue?.additionalData! : {};
        this._values = addPostRequestBodyParameterValue?.values;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "values": n => { this.values = n.getCollectionOfObjectValues<ConversationMemberImpl>(createConversationMemberFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.values && this.values.length != 0){        const valuesArrValue: ConversationMemberImpl[] = [];
        this.values?.forEach(element => {
            valuesArrValue.push((element instanceof ConversationMemberImpl? element as ConversationMemberImpl:new ConversationMemberImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConversationMemberImpl>("values", valuesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the values property value. The values property
     * @returns a ConversationMemberInterface
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. The values property
     * @param value Value to set for the values property.
     */
    public set values(value: ConversationMember[] | undefined) {
        if(value) {
            const valuesArrValue: ConversationMemberImpl[] = [];
            this.values?.forEach(element => {
                valuesArrValue.push((element instanceof ConversationMemberImpl? element as ConversationMemberImpl:new ConversationMemberImpl(element)));
            });
            this._values = valuesArrValue;
        }
    };
}
