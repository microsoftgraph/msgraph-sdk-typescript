import {createChannelFromDiscriminatorValue} from './createChannelFromDiscriminatorValue';
import {Channel, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeletedTeam extends Entity implements Parsable {
    /** The channels property */
    private _channels?: Channel[] | undefined;
    /**
     * Gets the channels property value. The channels property
     * @returns a channel
     */
    public get channels() {
        return this._channels;
    };
    /**
     * Sets the channels property value. The channels property
     * @param value Value to set for the channels property.
     */
    public set channels(value: Channel[] | undefined) {
        this._channels = value;
    };
    /**
     * Instantiates a new deletedTeam and sets the default values.
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
            "channels": n => { this.channels = n.getCollectionOfObjectValues<Channel>(createChannelFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Channel>("channels", this.channels);
    };
}
