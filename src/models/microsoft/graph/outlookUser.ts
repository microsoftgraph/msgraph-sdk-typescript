import {Entity} from './entity';
import {OutlookCategory} from './outlookCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OutlookUser extends Entity implements Parsable {
    /** A list of categories defined for the user.  */
    private _masterCategories?: OutlookCategory[] | undefined;
    /**
     * Instantiates a new outlookUser and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the masterCategories property value. A list of categories defined for the user.
     * @returns a outlookCategory
     */
    public get masterCategories() {
        return this._masterCategories;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["masterCategories", (o, n) => { (o as unknown as OutlookUser).masterCategories = n.getCollectionOfObjectValues<OutlookCategory>(OutlookCategory); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<OutlookCategory>("masterCategories", this.masterCategories);
    };
    /**
     * Sets the masterCategories property value. A list of categories defined for the user.
     * @param value Value to set for the masterCategories property.
     */
    public set masterCategories(value: OutlookCategory[] | undefined) {
        this._masterCategories = value;
    };
}
