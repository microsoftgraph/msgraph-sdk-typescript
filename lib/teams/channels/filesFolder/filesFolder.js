"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesFolder = void 0;
var file_1 = require("../../../agreements/file/file");
var baseItem_1 = require("../../../drive/baseItem");
var itemAnalytics_1 = require("../../../drive/list/items/analytics/itemAnalytics");
var root_1 = require("../../../drive/root/root");
var driveItem_1 = require("../../../driveItem");
var driveItemVersion_1 = require("../../../driveItemVersion");
var photo_1 = require("../../../groups/photo/photo");
var listItem_1 = require("../../../listItem");
var permission_1 = require("../../../permission");
var subscription_1 = require("../../../subscription");
var thumbnailSet_1 = require("../../../thumbnailSet");
var workbook_1 = require("../../../workbooks/workbook/workbook");
var FilesFolder = /** @class */ (function (_super) {
    __extends(FilesFolder, _super);
    /**
     * Instantiates a new FilesFolder and sets the default values.
     */
    function FilesFolder() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(FilesFolder.prototype, "analytics", {
        /**
         * Gets the analytics property value. Analytics about the view activities that took place on this item.
         * @returns a itemAnalytics
         */
        get: function () {
            return this._analytics;
        },
        /**
         * Sets the analytics property value. Analytics about the view activities that took place on this item.
         * @param value Value to set for the analytics property.
         */
        set: function (value) {
            this._analytics = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "audio", {
        /**
         * Gets the audio property value. Audio metadata, if the item is an audio file. Read-only.
         * @returns a audio
         */
        get: function () {
            return this._audio;
        },
        /**
         * Sets the audio property value. Audio metadata, if the item is an audio file. Read-only.
         * @param value Value to set for the audio property.
         */
        set: function (value) {
            this._audio = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "children", {
        /**
         * Gets the children property value. Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.
         * @returns a driveItem
         */
        get: function () {
            return this._children;
        },
        /**
         * Sets the children property value. Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.
         * @param value Value to set for the children property.
         */
        set: function (value) {
            this._children = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "content", {
        /**
         * Gets the content property value. The content stream, if the item represents a file.
         * @returns a binary
         */
        get: function () {
            return this._content;
        },
        /**
         * Sets the content property value. The content stream, if the item represents a file.
         * @param value Value to set for the content property.
         */
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "cTag", {
        /**
         * Gets the cTag property value. An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only.
         * @returns a string
         */
        get: function () {
            return this._cTag;
        },
        /**
         * Sets the cTag property value. An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only.
         * @param value Value to set for the cTag property.
         */
        set: function (value) {
            this._cTag = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "deleted", {
        /**
         * Gets the deleted property value. Information about the deleted state of the item. Read-only.
         * @returns a deleted
         */
        get: function () {
            return this._deleted;
        },
        /**
         * Sets the deleted property value. Information about the deleted state of the item. Read-only.
         * @param value Value to set for the deleted property.
         */
        set: function (value) {
            this._deleted = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "file", {
        /**
         * Gets the file property value. File metadata, if the item is a file. Read-only.
         * @returns a file
         */
        get: function () {
            return this._file;
        },
        /**
         * Sets the file property value. File metadata, if the item is a file. Read-only.
         * @param value Value to set for the file property.
         */
        set: function (value) {
            this._file = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "fileSystemInfo", {
        /**
         * Gets the fileSystemInfo property value. File system information on client. Read-write.
         * @returns a fileSystemInfo
         */
        get: function () {
            return this._fileSystemInfo;
        },
        /**
         * Sets the fileSystemInfo property value. File system information on client. Read-write.
         * @param value Value to set for the fileSystemInfo property.
         */
        set: function (value) {
            this._fileSystemInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "folder", {
        /**
         * Gets the folder property value. Folder metadata, if the item is a folder. Read-only.
         * @returns a folder
         */
        get: function () {
            return this._folder;
        },
        /**
         * Sets the folder property value. Folder metadata, if the item is a folder. Read-only.
         * @param value Value to set for the folder property.
         */
        set: function (value) {
            this._folder = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "image", {
        /**
         * Gets the image property value. Image metadata, if the item is an image. Read-only.
         * @returns a image
         */
        get: function () {
            return this._image;
        },
        /**
         * Sets the image property value. Image metadata, if the item is an image. Read-only.
         * @param value Value to set for the image property.
         */
        set: function (value) {
            this._image = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "listItem", {
        /**
         * Gets the listItem property value. For drives in SharePoint, the associated document library list item. Read-only. Nullable.
         * @returns a listItem
         */
        get: function () {
            return this._listItem;
        },
        /**
         * Sets the listItem property value. For drives in SharePoint, the associated document library list item. Read-only. Nullable.
         * @param value Value to set for the listItem property.
         */
        set: function (value) {
            this._listItem = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "location", {
        /**
         * Gets the location property value. Location metadata, if the item has location data. Read-only.
         * @returns a geoCoordinates
         */
        get: function () {
            return this._location;
        },
        /**
         * Sets the location property value. Location metadata, if the item has location data. Read-only.
         * @param value Value to set for the location property.
         */
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "package", {
        /**
         * Gets the package property value. If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.
         * @returns a package
         */
        get: function () {
            return this._package;
        },
        /**
         * Sets the package property value. If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.
         * @param value Value to set for the package property.
         */
        set: function (value) {
            this._package = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "pendingOperations", {
        /**
         * Gets the pendingOperations property value. If present, indicates that indicates that one or more operations that may affect the state of the driveItem are pending completion. Read-only.
         * @returns a pendingOperations
         */
        get: function () {
            return this._pendingOperations;
        },
        /**
         * Sets the pendingOperations property value. If present, indicates that indicates that one or more operations that may affect the state of the driveItem are pending completion. Read-only.
         * @param value Value to set for the pendingOperations property.
         */
        set: function (value) {
            this._pendingOperations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "permissions", {
        /**
         * Gets the permissions property value. The set of permissions for the item. Read-only. Nullable.
         * @returns a permission
         */
        get: function () {
            return this._permissions;
        },
        /**
         * Sets the permissions property value. The set of permissions for the item. Read-only. Nullable.
         * @param value Value to set for the permissions property.
         */
        set: function (value) {
            this._permissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "photo", {
        /**
         * Gets the photo property value. Photo metadata, if the item is a photo. Read-only.
         * @returns a photo
         */
        get: function () {
            return this._photo;
        },
        /**
         * Sets the photo property value. Photo metadata, if the item is a photo. Read-only.
         * @param value Value to set for the photo property.
         */
        set: function (value) {
            this._photo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "publication", {
        /**
         * Gets the publication property value. Provides information about the published or checked-out state of an item, in locations that support such actions. This property is not returned by default. Read-only.
         * @returns a publicationFacet
         */
        get: function () {
            return this._publication;
        },
        /**
         * Sets the publication property value. Provides information about the published or checked-out state of an item, in locations that support such actions. This property is not returned by default. Read-only.
         * @param value Value to set for the publication property.
         */
        set: function (value) {
            this._publication = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "remoteItem", {
        /**
         * Gets the remoteItem property value. Remote item data, if the item is shared from a drive other than the one being accessed. Read-only.
         * @returns a remoteItem
         */
        get: function () {
            return this._remoteItem;
        },
        /**
         * Sets the remoteItem property value. Remote item data, if the item is shared from a drive other than the one being accessed. Read-only.
         * @param value Value to set for the remoteItem property.
         */
        set: function (value) {
            this._remoteItem = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "root", {
        /**
         * Gets the root property value. If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive.
         * @returns a root
         */
        get: function () {
            return this._root;
        },
        /**
         * Sets the root property value. If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive.
         * @param value Value to set for the root property.
         */
        set: function (value) {
            this._root = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "searchResult", {
        /**
         * Gets the searchResult property value. Search metadata, if the item is from a search result. Read-only.
         * @returns a searchResult
         */
        get: function () {
            return this._searchResult;
        },
        /**
         * Sets the searchResult property value. Search metadata, if the item is from a search result. Read-only.
         * @param value Value to set for the searchResult property.
         */
        set: function (value) {
            this._searchResult = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "shared", {
        /**
         * Gets the shared property value. Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.
         * @returns a shared
         */
        get: function () {
            return this._shared;
        },
        /**
         * Sets the shared property value. Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.
         * @param value Value to set for the shared property.
         */
        set: function (value) {
            this._shared = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "sharepointIds", {
        /**
         * Gets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
         * @returns a sharepointIds
         */
        get: function () {
            return this._sharepointIds;
        },
        /**
         * Sets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
         * @param value Value to set for the sharepointIds property.
         */
        set: function (value) {
            this._sharepointIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "size", {
        /**
         * Gets the size property value. Size of the item in bytes. Read-only.
         * @returns a int64
         */
        get: function () {
            return this._size;
        },
        /**
         * Sets the size property value. Size of the item in bytes. Read-only.
         * @param value Value to set for the size property.
         */
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "specialFolder", {
        /**
         * Gets the specialFolder property value. If the current item is also available as a special folder, this facet is returned. Read-only.
         * @returns a specialFolder
         */
        get: function () {
            return this._specialFolder;
        },
        /**
         * Sets the specialFolder property value. If the current item is also available as a special folder, this facet is returned. Read-only.
         * @param value Value to set for the specialFolder property.
         */
        set: function (value) {
            this._specialFolder = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "subscriptions", {
        /**
         * Gets the subscriptions property value. The set of subscriptions on the item. Only supported on the root of a drive.
         * @returns a subscription
         */
        get: function () {
            return this._subscriptions;
        },
        /**
         * Sets the subscriptions property value. The set of subscriptions on the item. Only supported on the root of a drive.
         * @param value Value to set for the subscriptions property.
         */
        set: function (value) {
            this._subscriptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "thumbnails", {
        /**
         * Gets the thumbnails property value. Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable.
         * @returns a thumbnailSet
         */
        get: function () {
            return this._thumbnails;
        },
        /**
         * Sets the thumbnails property value. Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable.
         * @param value Value to set for the thumbnails property.
         */
        set: function (value) {
            this._thumbnails = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "versions", {
        /**
         * Gets the versions property value. The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.
         * @returns a driveItemVersion
         */
        get: function () {
            return this._versions;
        },
        /**
         * Sets the versions property value. The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.
         * @param value Value to set for the versions property.
         */
        set: function (value) {
            this._versions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "video", {
        /**
         * Gets the video property value. Video metadata, if the item is a video. Read-only.
         * @returns a video
         */
        get: function () {
            return this._video;
        },
        /**
         * Sets the video property value. Video metadata, if the item is a video. Read-only.
         * @param value Value to set for the video property.
         */
        set: function (value) {
            this._video = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "webDavUrl", {
        /**
         * Gets the webDavUrl property value. WebDAV compatible URL for the item.
         * @returns a string
         */
        get: function () {
            return this._webDavUrl;
        },
        /**
         * Sets the webDavUrl property value. WebDAV compatible URL for the item.
         * @param value Value to set for the webDavUrl property.
         */
        set: function (value) {
            this._webDavUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FilesFolder.prototype, "workbook", {
        /**
         * Gets the workbook property value. For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
         * @returns a workbook
         */
        get: function () {
            return this._workbook;
        },
        /**
         * Sets the workbook property value. For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
         * @param value Value to set for the workbook property.
         */
        set: function (value) {
            this._workbook = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    FilesFolder.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["analytics", function (o, n) { o.analytics = n.getObjectValue(itemAnalytics_1.ItemAnalytics); }],
            ["audio", function (o, n) { o.audio = n.getObjectValue(Audio); }],
            ["children", function (o, n) { o.children = n.getCollectionOfObjectValues(driveItem_1.DriveItem); }],
            ["content", function (o, n) { o.content = n.getObjectValue(Binary); }],
            ["cTag", function (o, n) { o.cTag = n.getStringValue(); }],
            ["deleted", function (o, n) { o.deleted = n.getObjectValue(Deleted); }],
            ["file", function (o, n) { o.file = n.getObjectValue(file_1.File); }],
            ["fileSystemInfo", function (o, n) { o.fileSystemInfo = n.getObjectValue(FileSystemInfo); }],
            ["folder", function (o, n) { o.folder = n.getObjectValue(Folder); }],
            ["image", function (o, n) { o.image = n.getObjectValue(Image); }],
            ["listItem", function (o, n) { o.listItem = n.getObjectValue(listItem_1.ListItem); }],
            ["location", function (o, n) { o.location = n.getObjectValue(GeoCoordinates); }],
            ["package", function (o, n) { o.package = n.getObjectValue(Package); }],
            ["pendingOperations", function (o, n) { o.pendingOperations = n.getObjectValue(PendingOperations); }],
            ["permissions", function (o, n) { o.permissions = n.getCollectionOfObjectValues(permission_1.Permission); }],
            ["photo", function (o, n) { o.photo = n.getObjectValue(photo_1.Photo); }],
            ["publication", function (o, n) { o.publication = n.getObjectValue(PublicationFacet); }],
            ["remoteItem", function (o, n) { o.remoteItem = n.getObjectValue(RemoteItem); }],
            ["root", function (o, n) { o.root = n.getObjectValue(root_1.Root); }],
            ["searchResult", function (o, n) { o.searchResult = n.getObjectValue(SearchResult); }],
            ["shared", function (o, n) { o.shared = n.getObjectValue(Shared); }],
            ["sharepointIds", function (o, n) { o.sharepointIds = n.getObjectValue(SharepointIds); }],
            ["size", function (o, n) { o.size = n.getObjectValue(Int64); }],
            ["specialFolder", function (o, n) { o.specialFolder = n.getObjectValue(SpecialFolder); }],
            ["subscriptions", function (o, n) { o.subscriptions = n.getCollectionOfObjectValues(subscription_1.Subscription); }],
            ["thumbnails", function (o, n) { o.thumbnails = n.getCollectionOfObjectValues(thumbnailSet_1.ThumbnailSet); }],
            ["versions", function (o, n) { o.versions = n.getCollectionOfObjectValues(driveItemVersion_1.DriveItemVersion); }],
            ["video", function (o, n) { o.video = n.getObjectValue(Video); }],
            ["webDavUrl", function (o, n) { o.webDavUrl = n.getStringValue(); }],
            ["workbook", function (o, n) { o.workbook = n.getObjectValue(workbook_1.Workbook); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    FilesFolder.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("analytics", this.analytics);
        writer.writeObjectValue("audio", this.audio);
        writer.writeCollectionOfObjectValues("children", this.children);
        writer.writeObjectValue("content", this.content);
        writer.writeStringValue("cTag", this.cTag);
        writer.writeObjectValue("deleted", this.deleted);
        writer.writeObjectValue("file", this.file);
        writer.writeObjectValue("fileSystemInfo", this.fileSystemInfo);
        writer.writeObjectValue("folder", this.folder);
        writer.writeObjectValue("image", this.image);
        writer.writeObjectValue("listItem", this.listItem);
        writer.writeObjectValue("location", this.location);
        writer.writeObjectValue("package", this.package);
        writer.writeObjectValue("pendingOperations", this.pendingOperations);
        writer.writeCollectionOfObjectValues("permissions", this.permissions);
        writer.writeObjectValue("photo", this.photo);
        writer.writeObjectValue("publication", this.publication);
        writer.writeObjectValue("remoteItem", this.remoteItem);
        writer.writeObjectValue("root", this.root);
        writer.writeObjectValue("searchResult", this.searchResult);
        writer.writeObjectValue("shared", this.shared);
        writer.writeObjectValue("sharepointIds", this.sharepointIds);
        writer.writeObjectValue("size", this.size);
        writer.writeObjectValue("specialFolder", this.specialFolder);
        writer.writeCollectionOfObjectValues("subscriptions", this.subscriptions);
        writer.writeCollectionOfObjectValues("thumbnails", this.thumbnails);
        writer.writeCollectionOfObjectValues("versions", this.versions);
        writer.writeObjectValue("video", this.video);
        writer.writeStringValue("webDavUrl", this.webDavUrl);
        writer.writeObjectValue("workbook", this.workbook);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return FilesFolder;
}(baseItem_1.BaseItem));
exports.FilesFolder = FilesFolder;
