import {createMobileAppContentFileFromDiscriminatorValue} from './createMobileAppContentFileFromDiscriminatorValue';
import {createMobileContainedAppFromDiscriminatorValue} from './createMobileContainedAppFromDiscriminatorValue';
import {Entity, MobileAppContentFile, MobileContainedApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains content properties for a specific app version. Each mobileAppContent can have multiple mobileAppContentFile.
 */
export class MobileAppContent extends Entity implements Parsable {
    /** The collection of contained apps in a MobileLobApp acting as a package. */
    private _containedApps?: MobileContainedApp[] | undefined;
    /** The list of files for this app content version. */
    private _files?: MobileAppContentFile[] | undefined;
    /**
     * Instantiates a new mobileAppContent and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the containedApps property value. The collection of contained apps in a MobileLobApp acting as a package.
     * @returns a mobileContainedApp
     */
    public get containedApps() {
        return this._containedApps;
    };
    /**
     * Sets the containedApps property value. The collection of contained apps in a MobileLobApp acting as a package.
     * @param value Value to set for the containedApps property.
     */
    public set containedApps(value: MobileContainedApp[] | undefined) {
        this._containedApps = value;
    };
    /**
     * Gets the files property value. The list of files for this app content version.
     * @returns a mobileAppContentFile
     */
    public get files() {
        return this._files;
    };
    /**
     * Sets the files property value. The list of files for this app content version.
     * @param value Value to set for the files property.
     */
    public set files(value: MobileAppContentFile[] | undefined) {
        this._files = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "containedApps": n => { this.containedApps = n.getCollectionOfObjectValues<MobileContainedApp>(createMobileContainedAppFromDiscriminatorValue); },
            "files": n => { this.files = n.getCollectionOfObjectValues<MobileAppContentFile>(createMobileAppContentFileFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<MobileContainedApp>("containedApps", this.containedApps);
        writer.writeCollectionOfObjectValues<MobileAppContentFile>("files", this.files);
    };
}
