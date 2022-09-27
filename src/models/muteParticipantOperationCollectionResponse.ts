import {createMuteParticipantOperationFromDiscriminatorValue} from './createMuteParticipantOperationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, MuteParticipantOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MuteParticipantOperationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: MuteParticipantOperation[] | undefined;
    /**
     * Instantiates a new MuteParticipantOperationCollectionResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getCollectionOfObjectValues<MuteParticipantOperation>(createMuteParticipantOperationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<MuteParticipantOperation>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a muteParticipantOperation
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: MuteParticipantOperation[] | undefined) {
        this._value = value;
    };
}
