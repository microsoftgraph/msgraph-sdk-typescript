import {createBrowserSiteListFromDiscriminatorValue} from './createBrowserSiteListFromDiscriminatorValue';
import {BrowserSiteList, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InternetExplorerMode extends Entity implements Parsable {
    /** The siteLists property */
    private _siteLists?: BrowserSiteList[] | undefined;
    /**
     * Instantiates a new internetExplorerMode and sets the default values.
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
            "siteLists": n => { this.siteLists = n.getCollectionOfObjectValues<BrowserSiteList>(createBrowserSiteListFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<BrowserSiteList>("siteLists", this.siteLists);
    };
    /**
     * Gets the siteLists property value. The siteLists property
     * @returns a browserSiteList
     */
    public get siteLists() {
        return this._siteLists;
    };
    /**
     * Sets the siteLists property value. The siteLists property
     * @param value Value to set for the siteLists property.
     */
    public set siteLists(value: BrowserSiteList[] | undefined) {
        this._siteLists = value;
    };
}
