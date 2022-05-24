import {ShiftItemImpl} from './index';
import {OpenShiftItem} from './openShiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class OpenShiftItemImpl extends ShiftItemImpl implements OpenShiftItem, Parsable {
    /** Count of the number of slots for the given open shift. */
    public openSlotCount?: number | undefined;
    /**
     * Instantiates a new openShiftItem and sets the default values.
     * @param openShiftItemParameterValue 
     */
    public constructor(openShiftItemParameterValue?: OpenShiftItem | undefined) {
        super();
        this.openSlotCount = openShiftItemParameterValue?.openSlotCount ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "openSlotCount": n => { this.openSlotCount = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.openSlotCount){
        writer.writeNumberValue("openSlotCount", this.openSlotCount);
        }
    };
}
