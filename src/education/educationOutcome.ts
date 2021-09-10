import {Entity} from '../entity';
import {IdentitySet} from '../identitySet';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class EducationOutcome extends Entity implements Parsable {
    private _lastModifiedBy?: IdentitySet | undefined;
    private _lastModifiedDateTime?: Date | undefined;
    /**
     * Instantiates a new educationOutcome and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the lastModifiedBy property value. 
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Gets the lastModifiedDateTime property value. 
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["lastModifiedBy", (o, n) => { (o as unknown as EducationOutcome).lastModifiedBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as EducationOutcome).lastModifiedDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
    };
    /**
     * Sets the lastModifiedBy property value. 
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. 
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
}
