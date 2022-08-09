import {SubjectSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetManager extends SubjectSet implements Parsable {
    /** Manager level, between 1 and 4. The direct manager is 1. */
    private _managerLevel?: number | undefined;
    /**
     * Instantiates a new TargetManager and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.targetManager";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "managerLevel": n => { this.managerLevel = n.getNumberValue(); },
        };
    };
    /**
     * Gets the managerLevel property value. Manager level, between 1 and 4. The direct manager is 1.
     * @returns a integer
     */
    public get managerLevel() {
        return this._managerLevel;
    };
    /**
     * Sets the managerLevel property value. Manager level, between 1 and 4. The direct manager is 1.
     * @param value Value to set for the managerLevel property.
     */
    public set managerLevel(value: number | undefined) {
        this._managerLevel = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("managerLevel", this.managerLevel);
    };
}
