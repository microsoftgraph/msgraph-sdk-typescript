import {DirectoryObject} from '../directoryObject';
import {Entity} from '../entity';
import {AdministrativeUnit} from './administrativeUnit';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Directory extends Entity implements Parsable {
    private _administrativeUnits?: AdministrativeUnit[] | undefined;
    /** Recently deleted items. Read-only. Nullable.  */
    private _deletedItems?: DirectoryObject[] | undefined;
    /**
     * Instantiates a new Directory and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the administrativeUnits property value. 
     * @returns a administrativeUnit
     */
    public get administrativeUnits() {
        return this._administrativeUnits;
    };
    /**
     * Gets the deletedItems property value. Recently deleted items. Read-only. Nullable.
     * @returns a directoryObject
     */
    public get deletedItems() {
        return this._deletedItems;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["administrativeUnits", (o, n) => { (o as unknown as Directory).administrativeUnits = n.getCollectionOfObjectValues<AdministrativeUnit>(AdministrativeUnit); }],
            ["deletedItems", (o, n) => { (o as unknown as Directory).deletedItems = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AdministrativeUnit>("administrativeUnits", this.administrativeUnits);
        writer.writeCollectionOfObjectValues<DirectoryObject>("deletedItems", this.deletedItems);
    };
    /**
     * Sets the administrativeUnits property value. 
     * @param value Value to set for the administrativeUnits property.
     */
    public set administrativeUnits(value: AdministrativeUnit[] | undefined) {
        this._administrativeUnits = value;
    };
    /**
     * Sets the deletedItems property value. Recently deleted items. Read-only. Nullable.
     * @param value Value to set for the deletedItems property.
     */
    public set deletedItems(value: DirectoryObject[] | undefined) {
        this._deletedItems = value;
    };
}
