import {AdminMember1, EventMessageDetail, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TabUpdatedEventMessageDetail extends EventMessageDetail implements Parsable {
    /** Initiator of the event. */
    private _initiator?: IdentitySet | AdminMember1 | undefined;
    /** Unique identifier of the tab. */
    private _tabId?: string | undefined;
    /**
     * Instantiates a new TabUpdatedEventMessageDetail and sets the default values.
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
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "tabId": n => { this.tabId = n.getStringValue(); },
        };
    };
    /**
     * Gets the initiator property value. Initiator of the event.
     * @returns a admin
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. Initiator of the event.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | AdminMember1 | undefined) {
        this._initiator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
        writer.writeStringValue("tabId", this.tabId);
    };
    /**
     * Gets the tabId property value. Unique identifier of the tab.
     * @returns a string
     */
    public get tabId() {
        return this._tabId;
    };
    /**
     * Sets the tabId property value. Unique identifier of the tab.
     * @param value Value to set for the tabId property.
     */
    public set tabId(value: string | undefined) {
        this._tabId = value;
    };
}
