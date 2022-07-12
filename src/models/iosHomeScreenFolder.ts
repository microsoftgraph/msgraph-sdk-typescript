import {createIosHomeScreenFolderPageFromDiscriminatorValue} from './createIosHomeScreenFolderPageFromDiscriminatorValue';
import {IosHomeScreenFolderPage, IosHomeScreenItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosHomeScreenFolder extends IosHomeScreenItem implements Parsable {
    /** Pages of Home Screen Layout Icons which must be applications or web clips. This collection can contain a maximum of 500 elements. */
    private _pages?: IosHomeScreenFolderPage[] | undefined;
    /**
     * Instantiates a new IosHomeScreenFolder and sets the default values.
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
            "pages": n => { this.pages = n.getCollectionOfObjectValues<IosHomeScreenFolderPage>(createIosHomeScreenFolderPageFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the pages property value. Pages of Home Screen Layout Icons which must be applications or web clips. This collection can contain a maximum of 500 elements.
     * @returns a iosHomeScreenFolderPage
     */
    public get pages() {
        return this._pages;
    };
    /**
     * Sets the pages property value. Pages of Home Screen Layout Icons which must be applications or web clips. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the pages property.
     */
    public set pages(value: IosHomeScreenFolderPage[] | undefined) {
        this._pages = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<IosHomeScreenFolderPage>("pages", this.pages);
    };
}
